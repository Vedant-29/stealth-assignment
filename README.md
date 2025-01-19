# BreakYourLLM

**BreakYourLLM** is a Next.js project focused on stress-testing language models (LLMs). It includes several pages that allow users to explore test results, view previous runs, and interact with the system. The goal is to demonstrate how LLM output can be evaluated, tested, and displayed in a structured, user-friendly UI.

---

## Overview

1. **Home Page**  
   ![alt text](./public/image.png)
   The home page provides a quick introduction and links to important sections of the project.  
   - Simple navigation towards LLM Results and Previous Test Runs

2. **LLM Results Page**  
   ![alt text](./public/image2.png)
   This page displays various metrics related to LLM performance, including accuracy, hallucination rate, drift rate, and custom metrics.  
   - Interactive charts  
   - Automatically fetched data  
   - Clear, responsive card layout  

3. **Previous Test Runs Page**  
   ![alt text](./public/image3.png)
   A detailed table listing past tests, including run dates, durations, and descriptions of the test conditions. This allows users to see historical changes in model performance over time.  

---

## Responsive Design

All pages and components are designed to be **fully responsive**. On mobile devices, the layout adapts and remains easy to navigate. We will also include multiple screenshots of how the UI looks in **phone mode** (e.g., iPhone, Android) so users can see it in action:
- **Mobile-friendly** layout with collapsible menus  
![alt text](./public/image-6.png) ![alt text](./public/image-1.png) ![alt text](./public/image-2.png) ![alt text](./public/image-3.png)
- **Adaptive** charts that resize to fit smaller screens  
![alt text](./public/image-4.png) ![alt text](./public/image-5.png)

---

## Vercel Deployment

You can view the live deployment of this project on Vercel. Click the link below to explore the application:
- [BreakYourLLM on Vercel](https://stealth-assignment-48cs.vercel.app/)
---

## Installation & Getting Started

Follow these steps to run **BreakYourLLM** locally:

1. **Clone this repository**:
   ```bash
   git clone https://github.com/Vedant-29/stealth-assignment.git
   cd stealth-assignment