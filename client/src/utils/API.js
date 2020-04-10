import axios from "axios";

export default {
    getEmployees: function() {
        axios.get("/api/employee")
    },

    getEmployee: function(id) {
        axios.get("/api/employee/" + id)
    },

    deleteEmployee: function() {
        axios.delete()
    }
}