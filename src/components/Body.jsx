import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Body.css';

const Body = () => {
    const [filmPopuler, setFilmPopuler] = useState(null);
    const [filmLainnya, setFilmLainnya] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get("http://localhost:3100/film");
                const allFilms = response.data.data;

                if (allFilms.length > 0) {
                    setFilmPopuler(allFilms[0]); // Film pertama sebagai film populer
                    setFilmLainnya(allFilms.slice(1)); // Film lainnya
                }
            } catch (error) {
                console.error("Gagal mengambil data film", error);
            }
        };

        fetchFilms();
    }, []);

    return (
        <div className="body-container">
            {/* Film Populer */}
            {filmPopuler && (
                <div className="film-populer">
                    <h2>Film Populer</h2>
                    <Link to={`/film/${filmPopuler.id}`} className="film-card">
                        <img src={filmPopuler.img} alt={filmPopuler.title} />
                        <h3>{filmPopuler.title}</h3>
                        <p>Durasi: {filmPopuler.duration} menit</p>
                    </Link>
                </div>
            )}

            {/* Film Lainnya */}
            <div className="film-lainnya">
                <h2>Film Lainnya</h2>
                <div className="film-list">
                    {filmLainnya.length > 0 ? (
                        filmLainnya.map((film) => (
                            <Link to={`/film/${film.id}`} key={film.id} className="film-card">
                                <img src={film.img} alt={film.title} />
                                <p>{film.title}</p>
                                {/* <p>Durasi: {filmLainnya.duration} menit</p> */}
                            </Link>
                        ))
                    ) : (
                        <p>Tidak ada film lainnya.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
