import { API_URL } from "../app/constants";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className='w-[80%] mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 pb-[100px]'>
      {videos.map((video) => (
        <iframe
          className='rounded-lg opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100'
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
