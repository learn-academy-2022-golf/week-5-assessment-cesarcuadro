# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Create a function named letterMatch.
# The parameters of the function will be named array and letter.
# The argument that will be passing through the array is an array of strings and a singular letter inside of a string.
# Iterate through the array with the letter as a filter.
# Use .select! to change the original array. (the ! character changes the accessor into a mutator)
# .include? is a method that checks if an element is in an array.
# Return a new string with the words that include the letter.

def letter_match array, letter
    array.select! {|let| let.include?(letter) }
end

p letter_match beverages_array, letter_o
# ["coffee", "soda water"]
p letter_match beverages_array, letter_t
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

#A hash is a special key:value pair.
# Create a method named value_array.
# The method will take in one parameter and will be named hash.
# Place the values into one array.
# Sort the strings in alphabetical order inside of the array.

def value_array hash
    hash.values.flatten.sort
end

# p value_array us_states
#Using .values prints out only the values of a hash
# [["Washington", "Oregon", "Idaho"], ["California", "Arizona", "Nevada"], ["Maine", "New Hampshire", "Rhode Island"]]
# p value_array us_states
#Using .flatten gets rid of a nested array
# ["Washington", "Oregon", "Idaho", "California", "Arizona", "Nevada", "Maine", "New Hampshire", "Rhode Island"]
p value_array us_states
#Using .sort sorts an array
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def pedal_faster num
        @current_speed += num
    end

    def brake num
        @current_speed -= num
    end

    def bike_info
        "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end

trek_bike = Bike.new('Trek bike')
p trek_bike.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."
p trek_bike.pedal_faster(10)
# 10
p trek_bike.pedal_faster(18)
#28
p trek_bike.brake(5)
#23
p trek_bike.brake(25)
#-2