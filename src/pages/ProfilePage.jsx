import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/PP.css"; // Pastikan file CSS sudah ada

const ProfilePage = () => {
    const [pembeli, setPembeli] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const pembeliId = localStorage.getItem("pembeliId"); // Ambil ID pengguna dari localStorage

    useEffect(() => {
        const fetchPembeliData = async () => {
            try {
                const response = await fetch("http://localhost:3100/pembeli");
                if (!response.ok) throw new Error("Pembeli not found");
                // const data = await response.json();
                // const data = result.data;
                const currentUser = data.find(pembeli => pembeli.id === parseInt(pembeliId));

                // Cari data pembeli berdasarkan ID
                const result = await response.json();
                const data = result.data;
                if (!currentUser) throw new Error("User tidak ditemukan");
                
                setPembeli(currentUser);
            } catch (error) {
                console.log("Error fetching pembeli data:", error);
            }
        };

        fetchPembeliData();
    }, [pembeliId]);

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3100/pembeli/update/${pembeliId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: newPassword }),
            });
            if (!response.ok) throw new Error("Gagal mengubah password");
            alert("Password berhasil diperbarui!");
        } catch (error) {
            console.error("Error updating password:", error);
        }
    };

    if (!pembeli) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <div className="profile-left">
                    <img src={pembeli.profilePic || "/default-avatar.png"} alt="Profile" className="profile-pic" />
                    <h2>{pembeli.username}</h2>
                </div>
                <div className="profile-right">
                    <div className="info-box">
                        <p><strong>Email:</strong> {pembeli.email}</p>
                        <p><strong>No. Telp:</strong> {pembeli.phone || "Belum diatur"}</p>
                    </div>
                    <div className="password-box">
                        <h3>Ubah Password</h3>
                        <form onSubmit={handlePasswordChange}>
                            <input
                                type="password"
                                placeholder="Masukkan password baru"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Update Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
