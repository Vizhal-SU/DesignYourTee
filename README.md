# DesignYourTee 🎨👕

DesignYourTee is a web application that allows users to customize and purchase t-shirts with personalized designs. The app provides an intuitive interface for designing, managing the cart, checking out, and adjusting design settings.

## Table of Contents 📑
1. [Project Details 📋](#project-details-📋)
2. [Technologies Used 🛠️](#technologies-used-🛠️)
3. [Features ✨](#features-✨)
4. [Installation 🛠️](#installation-🛠️)
5. [Usage 🧩](#usage-🧩)
6. [Images 🖼️](#images-🖼️)
7. [Videos 🎥](#videos-🎥)

## <a name="project-details-📋"> Project Details 📋 </a>

Developed a responsive full-stack e-commerce web application that supports custom 3D t-shirt design using React for the frontend and Express.js for the backend, integrating a RESTful API to manage user cart items and pricing configurations. Allows users to create unique 3-D T-shirt designs using Stable Diffusion from Hugging Face, as well as the option to upload their own logos or textures. Implemented secure user authentication, a responsive design interface, SQLite database for efficient data management, and a comprehensive e-commerce solution with an integrated payment system to facilitate ordering and purchasing of custom T-shirts.


## <a name= "technologies-used-🛠️"> Technologies Used 🛠️ </a>
- **Frontend**: React.js, Three,js, React Three Fiber, React Three Drei, Vite, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express.js, SQLite3
- **API Integration**: Axios, Stripe, Stable Diffusion from Hugging Face
- **State Management**: Valtio

## <a name = "features-✨"> Features ✨ </a>

### Login 🔒
- **User Authentication**: Secure login and registration system.
- **Profile Management**: Manage your account details and view past order.

### Design 🖌️
- **3D Generation**: Generate unique 3D t-shirt styles dynamically.
- **Upload Images**: Upload custom images or logos to place on your t-shirt.
- **AI-Generated Designs**: Utilize AI to generate images for logos or entire designs using Stable Diffusion from Hugging Face.
- **Color Adjustment**: Change the color of your t-shirt and design elements.
- **Preview**: Real-time preview of the designed t-shirt.
- **Download Options**: Able to download the design.

### Settings ⚙️
- **Design Adjustments**: Fine-tune the position and size of logos and other design elements.
- **User Preferences**: Save and load design settings for future use.

### Responsive Design 📱
- **Mobile Friendly**: Fully responsive design ensures usability on both desktop and mobile devices.
- **Adaptive Layout**: Adjusts layout and functionality to provide a seamless experience across different screen sizes.

### Checkout 🛒
- **Cart Management**: Update item quantities or remove items before purchasing.
- **Payment Integration**: Secure payment processing using Stripe for completing purchases.
- **Thank You Page**: Upon successful payment, a thank you page is displayed with an option to download the bill.

## <a name = "installation-🛠️"> Installation 🛠️ </a>

1. **Clone the repository**
    ```bash
    git clone https://github.com/Vizhal-SU/DesignYourTee.git
    ```
2. **Navigate to the project directory**
    ```bash
    cd DesignYourTee
    ```
3. **Run the script to install all dependencies**
    - **Unix-based systems:**
        1. Make the script executable:
            ```bash
            chmod +x install-all.sh
            ```
        2. Run the script:
            ```bash
            ./install-all.sh
            ```
    - **Windows:**
        1. Open Git Bash or any bash shell:
        2. Run the script directly:
            ```bash
            bash install-all.sh
            ```
4. **Start the server (backend)**
    ```bash
    cd server
    npm start
    ```

5. **Start the client (frontend)**
    ```bash
    cd client
    npm run dev
    ```

## <a name ="usage-🧩"> Usage 🧩 </a>

1. **Login or Register**: Create an account or log in with existing credentials.
2. **Start Designing**: Use the design interface to create your custom t-shirt.
3. **Add to Cart**: Add your design to the cart and proceed to checkout.
4. **Checkout**: Complete the purchase by providing payment details.
5. **Download Bill**: Download the bill from the thank you page after successful payment.

   

## <a name="images-🖼️"> Images 🖼️ </a>

## <a name="videos-🎥"> Videos 🎥 </a>

- [Login](https://drive.google.com/file/d/1kTzJbyXrN-nPFYiir1Hj3EG2Ejl55UZn/view?usp=sharing)
- [Settings](https://drive.google.com/file/d/1KpUBMqhtDROBeLnd7cdCIlBoJcTnkUPR/view?usp=sharing)
- [Design](https://drive.google.com/file/d/1ufLLqfDFVfxopBcn6Le5f97ifdDNlPzk/view?usp=sharing)
- [Checkout](https://drive.google.com/file/d/1dz3WdxFXalLvm4c7CchRtgzHi6HCjp7g/view?usp=sharing)
- [Responsive](https://drive.google.com/file/d/10DKkOSiqM8tJrNhO12ihFHaQjjYR-RZZ/view?usp=sharing)


  
