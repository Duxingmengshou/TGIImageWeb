class requestControl {
    constructor(baseURL) {
        this.isRequestControl = true;
        this.baseURL = baseURL || 'http://localhost:9013'; // Default base URL
    }

    async get(path) {
        try {
            const response = await fetch(`${this.baseURL}${path}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`GET request failed with status ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error in GET request:', error);
            throw error;
        }
    }

    async post(path, body) {
        try {
            const response = await fetch(`${this.baseURL}${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`POST request failed with status ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error in POST request:', error);
            throw error;
        }
    }
}

// export default requestControl;
const requestControlInstance = new requestControl('http://localhost:9013'); // Default base URL
export default requestControlInstance;