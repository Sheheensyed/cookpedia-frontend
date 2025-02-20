<div class="container-fluid w-100 my-3">
    <div class="row p-5 bg-black rounded-5">

        <div class="col-lg-2 d-none d-lg-block"></div>

        <div class="col-12 col-md-6 col-lg-4 text-center text-lg-start">
            <div>
                <h1 class="display-4">The Easiest Way <br> To Make Your <br> Favorite Meal</h1>
                <p class="mt-3">Discover 100+ recipes in your hand with the best recipe. Help you to find the easiest way to cook.</p>
                <button routerLink="/recipes" class="btn btn-success rounded-4 mt-3">Explore Our Recipes</button>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <img src="https://cu-media.imgix.net/media/catalog/product/cache/x1200/f/u/fusilli_with_cauliflower__capers__olives_and_sundried_tomato_-_forgione_1_.jpg?height=800&width=800&fit=crop&format=webp&cs=tinysrgb&lossless=true?w=3840"
                alt="" class="img-fluid rounded-circle landingImg">
        </div>
    </div>

    <!-- popular recipe -->
    <div class="my-5 p-5">
        <h1 class="text-black">Popular Recipe of the Week</h1>
        <div class="d-flex justify-content-between">
            <p class="text-black">Our Most popular recipe of the week</p>
            <a routerLink="/recipes">View more</a>
        </div>
        <div class="row my-5">
            <div class="col-12 col-md-4 mb-4">
                <div class="p-3">
                    <img class="card-img-top rounded-2 img-fluid"
                        src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
                        alt="">
                    <div class="card-body mt-2">
                        <h5 class="text-black">Recipe Name</h5>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4 mb-4">
                <div class="p-3">
                    <img class="card-img-top rounded-2 img-fluid"
                        src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
                        alt="">
                    <div class="card-body mt-2">
                        <h5 class="text-black">Recipe Name</h5>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4 mb-4">
                <div class="p-3">
                    <img class="card-img-top rounded-2 img-fluid"
                        src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
                        alt="">
                    <div class="card-body mt-2">
                        <h5 class="text-black">Recipe Name</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Banner -->
    <div class="row align-items-center my-5"
        style="background-image: url('https://foodsquare.co.in/wp-content/uploads/2015/11/Homepage-Banner-4.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height: 400px;">
        <div class="col-12 col-lg-6 p-5 d-flex justify-content-center">
            <div class="bg-black rounded-5 p-5 w-100">
                <h2>50+ Recipe That Very Quick And Fast</h2>
                <p>Find the perfect food ideas to start your day with the quick and easiest way.</p>
            </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block"></div>
    </div>

    <!-- Download -->
    <div class="row my-5 align-items-center text-light rounded p-5 bg-black rounded-5">
        <div class="col-12 col-md-6 d-flex justify-content-center">
            <img src="assets/devices.png" class="img-fluid" height="320" alt="">
        </div>
        <div class="col-12 col-md-6 text-center mb-5">
            <h1>Download App</h1>
            <h5>Download the app from App Store or <br> Google Play for a better experience.</h5>
            <div class="d-flex justify-content-center">
                <img src="https://freepngimg.com/download/android/67006-app-play-google-android-store-free-clipart-hd.png"
                    width="150px" alt="">
                <img src="https://benic360.com/wp-content/uploads/2020/06/apple-store-icon-png-8.png" width="150px" alt="">
            </div>
        </div>
    </div>

    <!-- Testimonial -->
    <div class="my-5 p-5 bg-black rounded-5">
        <h1 class="text-center">Client Testimonials</h1>
        <marquee behavior="" direction="" scrollamount="10">
            <div class="d-flex my-5">
                <div class="rounded border p-3 me-2" style="flex: 1; min-width: 250px;">
                    <p class="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit libero iste tempora ratione ad voluptatem enim nulla exercitationem impedit quod atque, nemo quos recusandae soluta veritatis aut reiciendis similique?
                    </p>
                </div>
                <div class="rounded border p-3 me-2" style="flex: 1; min-width: 250px;">
                    <p class="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit libero iste tempora ratione ad voluptatem enim nulla exercitationem impedit quod atque, nemo quos recusandae soluta veritatis aut reiciendis similique?
                    </p>
                </div>
                <div class="rounded border p-3 me-2" style="flex: 1; min-width: 250px;">
                    <p class="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit libero iste tempora ratione ad voluptatem enim nulla exercitationem impedit quod atque, nemo quos recusandae soluta veritatis aut reiciendis similique?
                    </p>
                </div>
                <div class="rounded border p-3 me-2" style="flex: 1; min-width: 250px;">
                    <p class="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit libero iste tempora ratione ad voluptatem enim nulla exercitationem impedit quod atque, nemo quos recusandae soluta veritatis aut reiciendis similique?
                    </p>
                </div>
            </div>
        </marquee>
    </div>
</div>

<app-footer></app-footer>
