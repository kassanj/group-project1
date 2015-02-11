class AddMoodToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :mood, :integer
  end
end
