class StudentsService {
    static get API_URI() {
        return 'http://localhost:1337/api/students';
    }

    fetchAll(){
        return fetch(StudentsService.API_URI).then(response => {
            return response.json()
        }).then(data => {
            return data;
        }).catch(rejection => {
            return [];
            console.log(rejection)
        })
    }
}

export default new StudentsService();