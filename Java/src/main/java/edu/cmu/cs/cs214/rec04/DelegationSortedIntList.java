package edu.cmu.cs.cs214.rec04;

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class DelegationSortedIntList implements IntegerList{
    // Write your implementation below with API documentation
    private final SortedIntList sortedList;
    private int totalAdded = 0;

    /**
     * Initializes a new DelegationSortedIntList.
     */
    public DelegationSortedIntList() {
        this.sortedList = new SortedIntList();
    }

    /**
     * Adds an element and increments the total added count.
     * 
     * @param value Element to be added.
     * @return {@code true} if successfully added, otherwise {@code false}.
     */
    @Override
    public boolean add(int value) {
        totalAdded++;
        return sortedList.add(value);
    }

    /**
     * Adds all elements from the specified list and increments the total added count.
     * 
     * @param values Elements to be added.
     * @return {@code true} if successfully added all elements, otherwise {@code false}.
     */
    @Override
    public boolean addAll(IntegerList values) {
        totalAdded += values.size();
        return sortedList.addAll(values);
    }

    /**
     * Returns the total number of elements added since creation.
     * 
     * @return Total number of added elements.
     */
    public int getTotalAdded() {
        return totalAdded;
    }

    /**
     * Retrieves the element at the specified position in the list.
     * 
     * @param index Position of the element.
     * @return Element at the specified position.
     */
    @Override
    public int get(int index) {
        return sortedList.get(index);
    }

    /**
     * Returns the number of elements in the list.
     * 
     * @return Size of the list.
     */
    @Override
    public int size() {
        return sortedList.size();
    }

    /**
     * Removes the first occurrence of the specified element from the list.
     * 
     * @param value Element to be removed.
     * @return {@code true} if the element was removed, otherwise {@code false}.
     */
    @Override
    public boolean remove(int value) {
        return sortedList.remove(value);
    }

    /**
     * Removes all occurrences of the elements from this list.
     * 
     * @param values Elements to be removed.
     * @return {@code true} if the list was modified, otherwise {@code false}.
     */
    @Override
    public boolean removeAll(IntegerList values) {
        return sortedList.removeAll(values);
    }

}