class AddCategoryToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :category, :integer
  end
end
