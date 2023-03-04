# Import flask and datetime module for showing date and time
from flask import Flask,jsonify,request
import datetime
from flask_cors import CORS

x = datetime.datetime.now()
# Initializing flask app
app = Flask(__name__)
CORS(app)


# Route for seeing a data
@app.route('/scorematchprofile', methods=['POST'])
def get_time():
    
    data = request.get_json()
    print(data)
    import json
    import numpy as np
    data_dict = data
    values = list(data_dict.values())
    import numpy as np
    data_list = values
    
    values = np.array([float(val) for val in data_list], dtype='float64')
    values = list(values)
    print(values)
    # data=[576.987145,1.000000,166.000000,0.000000,0.000000,0.000000,1.000000,0.000000,23.000000]
    import Predict as pr
    result = pr.score(data,gender)
    # print(result)
    # print(type(result))
    json_data = result.to_json(orient='records')
    return json_data

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
