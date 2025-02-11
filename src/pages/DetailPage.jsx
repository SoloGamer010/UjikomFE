import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const response = await axios.get(`http://localhost:3100/film/find/${id}`);
                setFilm(response.data.data);
            } catch (error) {
                console.error("Error fetching film:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilm();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!film) return <p>Film tidak ditemukan.</p>;

    return (
        <div>
            <h1>{film.title}</h1>
            <img src={film.img} alt={film.title} style={{ width: "300px", borderRadius: "10px" }} />
            <p><strong>Durasi:</strong> {film.duration} menit</p>
            <p><strong>Genre:</strong> {film.genre || "Tidak tersedia"}</p>
            <p><strong>Bahasa:</strong> {film.language || "Tidak tersedia"}</p>
            <p><strong>Actors:</strong> {film.actors?.split(",").join(", ") || "Tidak tersedia"}</p>
            <p><strong>Producers:</strong> {film.producers || "Tidak tersedia"}</p>
            <p><strong>Rilis:</strong> {film.release_date || "Tidak tersedia"}</p>
            <p><strong>Rating:</strong> {film.rating || "Tidak tersedia"}</p>
            <p><strong>Deskripsi:</strong> {film.description}</p>
        </div>
    );
};

export default DetailPage;
