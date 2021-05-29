class RemoveUrlFromList < ActiveRecord::Migration[6.0]
  def change
    remove_column :lists, :url, :string
  end
end
