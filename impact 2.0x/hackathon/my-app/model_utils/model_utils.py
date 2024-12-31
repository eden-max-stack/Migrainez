# model_utils/model_utils.py
import joblib
import numpy as np

# Load the saved model, label encoder, and scaler
def load_model():
    model = joblib.load('model_utils/tabnet_model.pkl')
    return model

def load_label_encoder():
    le = joblib.load('model_utils/label_encoder.pkl')
    return le

def load_scaler():
    scaler = joblib.load('model_utils/scaler.pkl')
    return scaler

def check_migraine_type(user_input):
    """
    Preprocess the input data, make a prediction using the model,
    and decode the prediction using the label encoder.
    """
    # Load model, label encoder, and scaler
    model = load_model()
    le = load_label_encoder()
    scaler = load_scaler()
    
    # Preprocess the input data
    input_data_scaled = scaler.transform(np.array([user_input]))
    
    # Predict using the trained model
    prediction = model.predict(input_data_scaled)
    
    # Decode the prediction to the original label
    predicted_type = le.inverse_transform(prediction)
    
    return predicted_type[0]
