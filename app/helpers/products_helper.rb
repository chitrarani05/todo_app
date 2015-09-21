module ProductsHelper
  def user_list
    return User.all.collect {|x| [x.username, x.id] }
  end
end
