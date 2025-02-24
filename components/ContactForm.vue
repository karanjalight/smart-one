<template>
    <div class="lg:py-20 py-20 px-2 w-full  h-auto flex flex-col items-center lg:justify-center  bg-white lg:mb-0 mb-0">
    <div class="carousel-slide h-20 w-full flex-shrink-0">

      <h2 class="text-center lg:text-4xl text-2xl pb-2 font-bold text-gray-800 mb-2 border-b border-sky-500 w-full ">
        Contact Us
      </h2>
    </div>
    <div class="flex lg:flex-row-reverse flex-col  lg:w-[55%] mx-auto  lg;gap-10 gap-5">
      <div class="flex lg:w-1/2">
        <div class="flex relative">
          <!-- Circle Background -->
          <div class="flex b items-center text-left justify-center">
            <div class="w-full mx-2 rounded-full">
              <div class="text-left lg:space-y-6 space-y-3">
                <div class='flex items-center justify-center flex-col'>
                  <h2 class="font-bold text-blue-950 lg:text-xl text-lg">
                    Get In Touch
                  </h2>
                  <div class="bg-blue-600 h-1 w-40 rounded-full"></div>
                </div>
                <p class="text-gray-800 text-sm ">
                  Write us a message and we will get back to you in under 2 hours!
                </p>

                <form class="w-full">
                  <div class="mt-3">

                    <div class="relative z-0 w-full mb-5 group">
                      <input type="text" name="floating_last_name" id="floating_last_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-sky-500 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                        placeholder=" " required />
                      <label for="floating_last_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full
                        name</label>
                    </div>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-sky-500 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                      placeholder=" " required />
                    <label for="floating_email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                      address</label>
                  </div>

                  <div class="grid md:grid-cols-2 w-full md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-sky-500 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                        placeholder=" " required />
                      <label for="floating_phone"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                        number</label>
                    </div>

                  </div>
                  <button type="submit"
                    class="text-white bg-gradient-to-l from-indigo-950 to-blue-600 hover:bg-gradient-to-r hover:from-indigo-950 hover:to-blue-950 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex lg:w-1/2 hidden relative">
        <!-- Image -->
        <div class=" ">
          <img src="https://www.joplumbing.com.au/wp-content/uploads/2020/03/JO-Plumbing-Contact-Us.jpg"
            alt="smart one contact us" class="  max-h-[160vh] w-full  rounded-xl mt-5 object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>