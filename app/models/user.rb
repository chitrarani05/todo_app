class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  ##################
  ## Associations
  ################        
  has_many :products
  has_and_belongs_to_many :products
  
  ###############
  ## Validations
  ###############
  validates :username,
    :presence => true,
    :uniqueness => {
      :case_sensitive => false
    }
  
  ##############
  ## Call Backs
  ##############
  
  #################
  ## Class Methods
  #################
  class << self
  
  end
  
  ######################
  ## Virtual Attributes
  ######################
  attr_accessor :login
  
  ##################
  ## Public Methods
  ##################
  
  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["username = :value OR lower(email) = lower(:value)", { :value => login }]).first
    else
      where(conditions.to_hash).first
    end
  end
         
end
