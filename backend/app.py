from flask import Flask, jsonify

app = Flask(__name__)

# Dummy data: a list of employees
employees = [
    {"id": 1, "name": "Alice", "role": "Developer"},
    {"id": 2, "name": "Bob", "role": "Manager"},
    {"id": 3, "name": "Charlie", "role": "HR"}
]

@app.route('/employees', methods=['GET'])
def get_employees():
    return jsonify(employees)

if __name__ == "__main__":
    app.run(debug=True)
