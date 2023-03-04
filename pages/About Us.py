import json
import streamlit as st
from streamlit_card import card
# from team import Prinkal, Mihir

st.set_page_config(
    page_title="Sizzle - About Us",
    page_icon="❗",
)
   
hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True) 