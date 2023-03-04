import streamlit as st
from streamlit_card import card
import pandas as pd
import numpy as np
import altair as alt
import pydeck as pdk

st.set_page_config(
    page_title="Sizzle - Home",
)

style = """
    img {
        border-radius: 10px;
        object-fit: cover;
        position: fixed;
        top: 5;
        left: 0;
        z-index: 1;
    }
"""

logo = "Images\Screenshot 2023-03-04 130845.png"
st.write(f'<style>{style}</style>', unsafe_allow_html=True)
st.image(logo, use_column_width=True)
#st.button("Mihir")
#E46399

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
