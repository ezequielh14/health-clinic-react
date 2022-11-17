import { useState } from "react";
import { authFire, db } from "../configs/firebase";
import { v4 as uuidv4 } from "uuid";
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";

export const useFirestore = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    const getTurn = async (statusTurn) => {
        try {
            setLoading((prev) => ({ ...prev, getTurn: true }));
            const docRef = collection(db, "turns");
            const q = query(docRef, where("status", "==", statusTurn));
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => {
                doc.data();
                console.log(doc.id, " => ", doc.data());
            });
            setData(dataDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, getTurn: false }));
        }
    };

    const getTurnByDni = async (statusTurn, userDni) => {
        try {
            setLoading((prev) => ({ ...prev, getTurn: true }));
            const docRef = collection(db, "turns");
            const q = query(
                docRef,
                where("status", "==", statusTurn),
                where("userDni", "==", userDni)
            );
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => {
                doc.data();
                console.log(doc.id, " => ", doc.data());
            });
            setData(dataDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, getTurn: false }));
        }
    };

    const getTurnBySpeciality = async (speciality) => {
        try {
            setLoading((prev) => ({ ...prev, getTurnBySpeciality: true }));
            const docRef = collection(db, "turns");
            const q = query(
                docRef,
                where("speciality", "==", speciality),
                where("status", "==", "avaliable")
            );
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => doc.data());
            setData(dataDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, getTurnBySpeciality: false }));
        }
    };

    const getTurnBySpecialityAndProfessional = async (
        speciality,
        professional
    ) => {
        try {
            setLoading((prev) => ({
                ...prev,
                getTurnBySpecialityAndProfessional: true,
            }));
            const docRef = collection(db, "turns");
            const q = query(
                docRef,
                where("speciality", "==", speciality),
                where("professional", "==", professional),
                where("status", "==", "avaliable")
            );
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => doc.data());
            setData(dataDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({
                ...prev,
                getTurnBySpecialityAndProfessional: false,
            }));
        }
    };

    const addTurn = async (
        speciality,
        professional,
        dateTurn,
        timeTurn,
        siteTurn
    ) => {
        try {
            setLoading((prev) => ({ ...prev, addTurn: true }));
            const newDoc = {
                speciality: speciality,
                professional: professional,
                date: dateTurn,
                time: timeTurn,
                site: siteTurn,
                status: "avaliable",
                uuid: uuidv4(),
            };
            const docRef = doc(db, "turns", newDoc.uuid);
            await setDoc(docRef, newDoc);
            setData([...data, newDoc]);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, addTurn: false }));
        }
    };

    const updateTurn = async (uuid, newStatus) => {
        try {
            setLoading((prev) => ({ ...prev, updateTurn: true }));
            const docRef = doc(db, "turns", uuid);
            await updateDoc(docRef, { status: newStatus });
            setData(
                data.map((item) =>
                    item.uuid === uuid ? { ...item, status: newStatus } : item
                )
            );
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, updateTurn: false }));
        }
    };

    const updateTurnByUser = async (uuid, newStatus, userDni) => {
        try {
            setLoading((prev) => ({ ...prev, updateTurnByUser: true }));
            const docRef = doc(db, "turns", uuid);
            await updateDoc(docRef, {
                status: newStatus,
                iduser: authFire.currentUser.uid,
                userDni: userDni,
            });
            setData(
                data.map((item) =>
                    item.uuid === uuid
                        ? {
                              ...item,
                              status: newStatus,
                              iduser: authFire.currentUser.uid,
                              userDni: userDni,
                          }
                        : item
                )
            );
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, updateTurnByUser: false }));
        }
    };

    const getUserByRole = async (uid) => {
        try {
            setLoading((prev) => ({ ...prev, getUserByRole: true }));
            const docRef = collection(db, "users");
            const q = query(
                docRef,
                where("uid", "==", uid),
                where("role", "==", "admin")
            );
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => {
                if (doc.data().role == "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
            console.log(dataDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({ ...prev, getUserByRole: false }));
        }
    };

    return {
        data,
        error,
        loading,
        getTurn,
        getTurnBySpeciality,
        getTurnBySpecialityAndProfessional,
        addTurn,
        updateTurn,
        updateTurnByUser,
        getTurnByDni,
        getUserByRole,
        isAdmin,
    };
};
