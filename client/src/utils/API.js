import axios from "axios";

export default {
    getEmployees: function() {
        return axios.get("/api/employees")
    },

    sortbyDepartment: function(){
        return axios.get("/api/employees/sort/department")
    },

    getEmployee: function(id) {
        return axios.get("/api/employees/" + id)
    },

    deleteEmployee: function(id) {
        return axios.delete("/api/employees/" + id)
    },

}