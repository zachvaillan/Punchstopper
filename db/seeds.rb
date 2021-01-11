# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Project.destroy_all

guest = User.create!({
  name: 'Guest',
  email: 'demo',
  password: 'demodemo'
})

# guest.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/jr-korpa-iTFu87JYsr4-unsplash.jpg'), filename: 'jr-korpa-iTFu87JYsr4-unsplash.jpg')
file1 = open('https://punchstopper-newseeds.s3-us-west-1.amazonaws.com/jr-korpa-iTFu87JYsr4-unsplash.jpg')
guest.photo.attach(io: file1, filename: 'jr-korpa-iTFu87JYsr4-unsplash.jpg')

project_maker = User.create!({
  id: 4,
  name: 'Project Man',
  email: 'project-man12@gmail.com',
  password: 'project-king!'
})

project1 = Project.create!({
  title: "Build the Sphinx",
  description: "With an unbreakable nose",
  funding_goal: 10000,
  funding_amount: 1000,
  owner_id: 4,
  location: "Australia",
  category: "Arts",
  launched: true
})

file2 = open('https://punchstopper-newseeds.s3-us-west-1.amazonaws.com/francisco-gomes-RktLzQoDe9Y-unsplash.jpg')
project1.photo.attach(io: file2, filename: 'kitera-dent-klcIcBJ-0Vc-unsplash.jpg')

project2 = Project.create!({
  title: "Top Secret Waffle Mix",
  description: "The most delicious waffles created with ingredients from the far reaches of the world",
  funding_goal: 10000,
  funding_amount: 500,
  owner_id: 4,
  location: "Belgium",
  category: "Craft",
  launched: true
})

file3 = open('https://punchstopper-newseeds.s3-us-west-1.amazonaws.com/rachel-park-hrlvr2ZlUNk-unsplash.jpg')
project2.photo.attach(io: file3, filename: 'rachel-park-hrlvr2ZlUNk-unsplash.jpg')

project3 = Project.create!({
  title: "Mountain Portraits",
  description: "Making it easy to purchase a mountain side sculpture of yourself!",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "United-States",
  category: "Arts",
  launched: true
})

file4 = open('https://punchstopper-newseeds.s3-us-west-1.amazonaws.com/ronda-darby-HbMLSB-uhQY-unsplash.jpg')
project3.photo.attach(io: file4, filename: 'ronda-darby-HbMLSB-uhQY-unsplash.jpg')

project4 = Project.create!({
  title: "Online Salad Kit Ordering",
  description: "Order your weekly ingredients, delivered to your door at the start of every week!",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "United-States",
  category: "Craft",
  launched: true
})

file5 = open('https://punchstopper-newseeds.s3-us-west-1.amazonaws.com/dan-gold-4_jhDO54BYg-unsplash.jpg')
project4.photo.attach(io: file5, filename: 'dan-gold-4_jhDO54BYg-unsplash.jpg')