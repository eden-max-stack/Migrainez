from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Extract the input data from the request
    # Add your model logic here
    
    # Example logic to determine the type of migraine:
    age = data.get('age')
    intensity = int(data.get('intensity'))
    
    # Simplified example conditions for prediction
    if intensity > 7:
        prediction = "Typical aura with migraine"
    elif age < 20:
        prediction = "Migraine without aura"
    else:
        prediction = "Based on the inputs given you might not have Migraine, but if symptoms prolong, please consult a doctor."
    
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
