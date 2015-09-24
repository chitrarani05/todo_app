module ProductsHelper

  def user_list
    return User.all.collect {|x| [x.username, x.id] if x.id != current_user.id }.compact
  end

  def get_owner(product)
    if product.user.present?
      return product.user.username
    else
      return "Owner has been deleted"
    end
  end
end
