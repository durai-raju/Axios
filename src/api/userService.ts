import axios from "axios";

// Define the User interface
export interface User {
    id: number;
    name: string;
    age: number;
}

// Function to fetch users
export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get("http://localhost:5000/users"); // Replace with your API URL
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};
