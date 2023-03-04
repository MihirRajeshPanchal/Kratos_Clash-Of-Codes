def score(data,gender):
    import pandas as pd
    import numpy as np

    df=pd.read_csv("users_analysis.csv")

    from sklearn.preprocessing import LabelEncoder
    le = LabelEncoder()

    df['gender']=le.fit_transform(df['gender'])
    df['is_habit_drink']=le.fit_transform(df['is_habit_drink'])
    df['is_habit_smoke']=le.fit_transform(df['is_habit_smoke'])
    df['is_verified']=le.fit_transform(df['is_verified'])
    df['who_to_date']=le.fit_transform(df['who_to_date'])
    df['is_subscribed']=le.fit_transform(df['is_subscribed'])
    df.fillna(-1, inplace=True)

    x=df.drop(['_id','college','bio','country','dob','email','updatedAt','face_detection_probabilities','insta_username','createdAt','verified_at','interests','mobile','name','status','type','what_to_find','liked_counts','disliked_counts','Score'],axis=1)    
    y=df['Score']
    
    from sklearn.model_selection import train_test_split

    x_train,x_test,y_train,y_test=train_test_split(x,y,train_size=0.3,random_state=0)

    from sklearn.tree import DecisionTreeRegressor

    # Build decision tree
    model=DecisionTreeRegressor(max_depth=1)

    model.fit(x_train,y_train)
    model.predict(x_test)

    res = model.predict([data])

    target_score = res[0]

    df['score_diff'] = abs(df['Score'] - target_score)

    # filter the DataFrame to only include rows where gender is 1
    df_filtered = df[df['gender'] == gender]

    # sort the filtered DataFrame based on the score difference
    df_sorted = df_filtered.sort_values(by='score_diff')

    # get the top 10 rows where score is close to target_score
    result = df_sorted.head(10)

    # drop the score_diff column from the result
    result = result.drop(columns='score_diff')

    # print the result
    # print(result)
    return result