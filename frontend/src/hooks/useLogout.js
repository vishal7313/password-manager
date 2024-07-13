import { useState } from 'react'
import toast from 'react-hot-toast';

export const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(false);
        try {
            const res = await fetch('/api/auth/logout', {
				method: "POST",
				headers: { "Content-Type": "application/json" }
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, logout}
}

export default useLogout;