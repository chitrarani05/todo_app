class Product < ActiveRecord::Base
  ##################
  ## Associations
  ################        
  belongs_to :user
  has_and_belongs_to_many :users
  
  #######################
  ## Attribute Accessors
  #######################
  ###############
  ## Validations
  ###############
  validates :name, :description, presence: true
  
end
