import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function CrudButtons() {
  const navigate = useNavigate();

  const handleAdd = () => navigate('addEmployee');
  const handleDelete = () => navigate('deleteEmployee');
  const handleUpdate = () => navigate('updateEmployee');
  const handleView = () => navigate('viewEmployee');

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex gap-3">
        <button onClick={handleAdd} className="btn btn-primary">
          ADD
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          DELETE
        </button>
        <button onClick={handleUpdate} className="btn btn-warning">
          UPDATE
        </button>
        <button onClick={handleView} className="btn btn-success">
          VIEW
        </button>
      </div>
    </div>
  );
}
