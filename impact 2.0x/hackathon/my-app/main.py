import sys
from model_utils.model_utils import check_migraine_type

def detect_migraine(user_input):
    # Predict the migraine type
    predicted_migraine_type = check_migraine_type(user_input)

    if predicted_migraine_type == "Other":
        return "Based on your input you might not have Migraine, please confirm with a doctor if symptoms prolong."
    else:
        return f"Predicted Migraine Type: {predicted_migraine_type}"

if __name__ == "__main__":
    # Read user input from command line arguments
    user_input = sys.argv[1:]
    result = detect_migraine(user_input)
    print(result)
