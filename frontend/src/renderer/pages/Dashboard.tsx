import '../css/App.css';
import Menu from '../components/Menu';
import image from '../../../assets/image.png';

export default function Dashboard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard BatBrasil</h2>
      <img width={200} height={200} src={image} alt="" />
    </div>
  );
}


