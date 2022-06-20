import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
// import { list } from "../../Data";
import { Link } from "react-router-dom";
import moment from "moment";

function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  //if date parameter exists in api data .....enable this function to sort  and replace entities with list//
  // let sortedCars1 = list.sort(
  //   (a, b) =>
  //     new Date(...a.date.split("/").reverse()) -
  //     new Date(...b.date.split("/").reverse())
  // );
  return (
    <div className="container">
      <div className="row">
        <h1>CRUD app - Redux , Toolkit</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities?.map(({ id, name, email, date }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    {/* <td>{moment(date).format("L")}</td> */}
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default UserList;
