import os
import pandas as pd
from sklearn.linear_model import LinearRegression

def train_model_and_predict(features):
    # Load the dataset
    current_dir = os.path.dirname(os.path.abspath(__file__))
    csv_path = os.path.join(current_dir, 'ParisHousing.csv')
    df = pd.read_csv(csv_path)
    
    # Selecting the features
    selected_features = ['numberOfRooms', 'hasYard', 'hasPool', 'floors', 'cityPartRange', 'made', 'basement', 'squareMeters', 'garage']
    
    # Dropping rows with missing values for simplicity
    data = df[selected_features + ['price']].dropna()
    
    # Splitting the dataset into training and testing sets
    X = data[selected_features]
    y = data['price']
    
    # Creating and training the linear regression model
    model = LinearRegression()
    model.fit(X, y)
    
    # Predicting the price based on the input features
    predicted_price = model.predict([features])
    #print(predicted_price)
    return predicted_price[0]