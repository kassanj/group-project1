class AddDateToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :date, :date
  end
end
