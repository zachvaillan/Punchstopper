# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all

guest = User.create!({
  name: 'Guest',
  email: 'demo',
  password: 'demodemo'
})

# guest.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/jr-korpa-iTFu87JYsr4-unsplash.jpg'), filename: 'jr-korpa-iTFu87JYsr4-unsplash.jpg')
guest.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/jr-korpa-iTFu87JYsr4-unsplash.jpg'), filename: 'jr-korpa-iTFu87JYsr4-unsplash.jpg')

project_maker = User.create!({
  id: 4,
  name: 'Project Man',
  email: 'project-man12@gmail.com',
  password: 'project-king!'
})

project1 = Project.create!({
  title: "Build the Eiffel Tower",
  description: "Build a monument to Paris!",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project1.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/kitera-dent-klcIcBJ-0Vc-unsplash.jpg'), filename: 'kitera-dent-klcIcBJ-0Vc-unsplash.jpg')

project2 = Project.create!({
  title: "Go to the moon",
  description: "To boldly go where no man has gone before",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project2.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/riya-rohewal-b-88UFvOhtQ-unsplash.jpg'), filename: 'riya-rohewal-b-88UFvOhtQ-unsplash.jpg')

project3 = Project.create!({
  title: "Build the statue of liberty",
  description: "A monument to freedom",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project3.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/vinayak-sharma-xFpB63IlwNo-unsplash.jpg'), filename: 'vinayak-sharma-xFpB63IlwNo-unsplash.jpg')

project4 = Project.create!({
  title: "Build the sphinx",
  description: "A monument to pharaoh",
  funding_goal: 10000,
  funding_amount: 100,
  owner_id: 4,
  location: "Australia",
  category: "Comics",
  launched: true
})

project4.photo.attach(io: File.open('/Users/zachvaillancourt/Downloads/francisco-gomes-RktLzQoDe9Y-unsplash.jpg'), filename: 'francisco-gomes-RktLzQoDe9Y-unsplash.jpg')
