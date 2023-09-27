package edu.cmu.cs.cs214.rec04;

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class InheritanceSortedIntList extends SortedIntList{
    // Write your implementation below with API documentation
    private int totalAdded = 0;

    /**
     * Adds an element and increments the total added count.
     * 
     * @param value Element to be added.
     * @return {@code true} if the list is modified, otherwise {@code false}.
     */
    @Override
    public boolean add(int value){
        totalAdded++;
        return super.add(value);
    }

    /**
     * Adds all elements from the given list and updates the total added count.
     * 
     * @param values List of elements to be added.
     * @return {@code true} if the list is modified, otherwise {@code false}.
     */
    @Override
    public boolean addAll(IntegerList values){
        boolean modified = false;
        for (int i = 0; i < values.size(); i++) {
            modified = add(values.get(i)) || modified;
        }
        return modified;
    }

    /**
     * @return Total number of elements added since the list's creation.
     */
    public int getTotalAdded(){
        return totalAdded;
    }

}