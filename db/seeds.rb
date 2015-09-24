# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: 'admin', email: 'admin@admin.com', password: 'monkey', password_confirmation: 'monkey');
Product.create!(name: 'Ruby', description: 'Ruby is a dynamic, open source programming language with a focus on simplicity & productivity.', user_id: 1)
Product.create!(name: 'Rails', description: 'Rails is an open-source web framwork that optimized for programmer happiness and sustainable productivity.', user_id: 1)
Product.create!(name: 'C Language', description: 'C is a general-purpose high level language that was originally developed by Dennis Ritchie for the Unix operating system', user_id: 1)
Product.create!(name: 'PHP', description: 'PHP is an acronym for "PHP: Hypertext Preprocessor', user_id: 1)
