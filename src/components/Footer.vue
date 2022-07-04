<template>
    <footer id="footer">
        <div class="container__footer">
            <div class="box__footer">
                <div class="logo">
                    <h2>WeBuildWebz</h2>
                </div>
                <div class="terms">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                        impedit cum cumque velit libero officiis quam doloremque
                        reprehenderit quae corporis!
                    </p>
                </div>
            </div>
            <div class="box__footer">
                <h2>Soluciones</h2>
                <a rel="noreferrer noopener" href="https://www.google.com">
                    App Desarrollo
                </a>
                <a rel="noreferrer noopener" href="#">
                    ecommerce
                </a>
                <a rel="noreferrer noopener" href="#">
                    Desarrollo Web
                </a>
                <a rel="noreferrer noopener" href="#">
                    Desarrollo Android
                </a>
            </div>

            <div class="box__footer">
                <h2>Informacion</h2>
                <a rel="noreferrer noopener" href="#">
                    Acerca de
                </a>
                <a rel="noreferrer noopener" href="#">
                    Trabajos
                </a>
                <a rel="noreferrer noopener" href="#">
                    Procesos
                </a>
                <a rel="noreferrer noopener" href="#">
                    Servicios
                </a>
            </div>

            <div class="box__footer">
                <h2>Redes Sociales</h2>
                <a rel="noreferrer noopener" href="#">
                    <img src="../assets/images/facebook.svg" alt="facebook icon" class="icon" />
                    Facebook
                </a>
                <a rel="noreferrer noopener" href="#">
                    <img src="../assets/images/twitter.svg" alt="twitter icon" class="icon" />
                    Twitter
                </a>
                <a rel="noreferrer noopener" href="#">
                    <img src="../assets/images/linkedin.svg" alt="linkedin icon" class="icon" />
                    Linkedin
                </a>
                <a rel="noreferrer noopener" href="#">
                    <img src="../assets/images/instagram.svg" alt="instagram icon" class="icon" />
                    Instagram
                </a>
            </div>
        </div>
    </footer>
    <Copyright />
</template>

        <style scoped>
            footer {
                width: 100vw;
                padding: 50px 0px;
            }

            .container__footer {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                max-width: 1200px;
                margin: auto;
                margin-top: 100px;
            }

            .box__footer {
                display: flex;
                flex-direction: column;
                padding: 40px;
            }

            .box__footer .terms {
                max-width: 350px;
                margin-top: 20px;
                font-weight: 500;
                font-size: 18px;
            }

            .box__footer h2 {
                margin-bottom: 30px;
                font-weight: 700;
            }

            .box__footer a {
                margin-top: 10px;
                font-weight: 600;
                display: flex;
            }

            .box__footer a:hover {
                opacity: 0.8;
            }

            .icon {
                width: 20px;
                height: 20px;
                padding: 5px 5px 0 0;
            }
        </style>


<script setup lang="ts">
import Copyright from './Copyright.vue';

</script>