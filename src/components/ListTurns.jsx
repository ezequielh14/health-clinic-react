const ListTurns = ({ turns }) => {

  const handleReserve = (e) => {
    e.preventDefault();
    console.log("cambia a falso el estado")
  };

  return (
    <>
      <div className="m-3 w-96 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <h2 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
          Available Turns
        </h2>
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
              >
                Hour
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
              >
                Reserve
              </th>
            </tr>
          </thead>
          <tbody>
            {turns.map((turn) => (
              <tr className="border-b" key={turn.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {turn.date}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {turn.hour}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {turn.state ? <button className="block rounded-lg bg-blue-500 px-3 py-3 font-semibold text-white hover:bg-blue-400 focus:bg-blue-400" onClick={handleReserve}>Reserve</button> : <span>alreay reserve</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListTurns;
