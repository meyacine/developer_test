class StudentsService {
    static get API_URI() {
        return 'http://localhost:1337/api/students';
    }

    fetchAll() {
        return fetch(StudentsService.API_URI).then(response => {
            return response.json()
        }).then(data => {
            return data;
        }).catch(rejection => {
            console.log(rejection)
            return [];
        })
    }

    save(student) {
        let urlComplement = student.id ? '/' + student.id : ''
        let methode = 'POST'
        if (student.id) {
            methode = 'put'
        }
        const url = StudentsService.API_URI + urlComplement
        return fetch(url, {
            method: methode,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => {
            return response.json()
        }).then(data => {
            return data;
        })
    }

    delete(student) {
        const url = StudentsService.API_URI + '/' + student.id
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            return data;
        }).catch(rejection => {
            console.log(rejection)
            return [];
        })
    }
}

export default new StudentsService();