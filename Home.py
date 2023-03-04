import streamlit as st
from streamlit_card import card
import pandas as pd
import numpy as np
import altair as alt
import pydeck as pdk

st.set_page_config(
    page_title="Sizzle - Home",
)


st.button("Mihir")

hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            </style>
            """
st.markdown(
    hide_streamlit_style, 
    unsafe_allow_html=True
) 
