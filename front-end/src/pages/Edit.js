import EditCar from "../components/EditCar";

function Edit({ role }) {
  return (
    <div>
      <h2>Update Car Info</h2>
      <EditCar role={role} />
    </div>
  );
}

export default Edit;
