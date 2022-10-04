 <template>
    <section class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <form action="" class="container max-w-screen-lg  ">
      <div class="bg-white rounded shadow-lg   px-4  p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">family Details</p>
            <p>Please fill out all the fields.</p>
          </div>
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1  ">
              <div class="col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1  px-4 w-full" value="" />
              </div>
              <div class="lg:col-span-3 col-span-5">
                <label for="address">Address / Street</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1  px-4 w-full " value="" placeholder="" />
              </div>
              <div class="lg:col-span-2 col-span-5">
                <label for="city">City</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1  px-4 w-full " value="" placeholder="" />
              </div>

              <div class="lg:flex col-span-6 w-full"> 

              <div class="lg:mr-2">
                <label for="family">Number of your family?</label>
                <div class="h-10   w-28 flex border mt-1">
                  <input name="family" id="family" placeholder="0" class="px-2 text-center w-full " value="0" />
                </div>
              </div>
              
              <div class="lg:mx-4">
                <label for="family">Number of Male?</label>
                <div class="h-10  w-28 flex border   mt-1">
                  <input name="family" id="family" placeholder="0" class="px-2 text-center w-full " value="0" />
                </div>
              </div>
              <div class=" ">
                <label for="family">Number of Female?</label>
                <div class="h-10  w-28   flex border mt-1">
                  <input name="family" id="family" placeholder="0" class="px-2 text-center w-full " value="0" />
                </div>
              </div>
            </div>
              <div class="col-span-5 text-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </form>
</section>
</template>