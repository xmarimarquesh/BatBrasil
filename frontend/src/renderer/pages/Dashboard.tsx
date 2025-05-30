import '../css/App.css';
import Menu from '../components/Menu';

export default function Dashboard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard BatBrasil</h2>
      <iframe
        width="100%"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiMzZkMjcwYzUtZjEyMi00YWE2LThhYjUtYWM4NTVkZGM3MTU1IiwidCI6Ijc2YmZkNTBlLTVkNTAtNDc2Yi05NGZkLTVlMzAxZDQ2OGZhNiIsImMiOjF9"
        frameBorder="0"
        allowFullScreen
        title="Dashboard BatBrasil"
      ></iframe>
    </div>
  );
}


