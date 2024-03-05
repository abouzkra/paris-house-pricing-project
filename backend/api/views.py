from django.http import JsonResponse
import json

from .predict_price import train_model_and_predict

def predict_price(request):
    if request.method == 'POST':
        # Extract JSON data from the request body
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

        # Extract relevant data from the JSON payload
        numberOfRooms = data.get('numberOfRooms')
        hasYard = data.get('hasYard')
        hasPool = data.get('hasPool')
        floors = data.get('floors')
        cityPartRange = data.get('cityPartRange')
        made = data.get('made')
        basement = data.get('basement')
        squareMeters = data.get('squareMeters')
        garage = data.get('garage')

        # Create a dictionary of features
        features = {
            'numberOfRooms': int(numberOfRooms),
            'hasYard': bool(hasYard),
            'hasPool': bool(hasPool),
            'floors': int(floors),
            'cityPartRange': cityPartRange,
            'made': int(made),
            'basement': float(basement),
            'squareMeters': float(squareMeters),
            'garage': float(garage),
        }

        # Call the train_model_and_predict function with the features dictionary
        predicted_price = train_model_and_predict(list(features.values()))

        # Return the predicted price as a JSON response
        return JsonResponse({'predicted_price': predicted_price})

    # Return a method not allowed response for other HTTP methods
    return JsonResponse({'error': 'Method not allowed'}, status=405)
