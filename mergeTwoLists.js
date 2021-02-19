// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists1 = (l1, l2) => {
    const result = new ListNode();
    let p = l1, q = l2, current = result; 
    
    while(p || q) {
        const x = p ? p.val : undefined, y = q ? q.val : undefined;
        if (p && q) {
            if (x > y) {
                current.next = new ListNode(y);
                q = q.next;    
            } else {
                current.next = new ListNode(x);
                p = p.next;
            }
        } else if (q) { 
            current.next = new ListNode(y);
            q = q.next;
        } else if (p) {
            current.next = new ListNode(x);
            p = p.next;
        }
        current = current.next;
    }
    return result.next;
};


const mergeTwoLists2 = (l1, l2) => {
    let l3 = new ListNode(0);
    const link = l3;
    
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            l3.next = new ListNode(l1.val);
            l1 = l1.next;  
        } else {
            l3.next = new ListNode(l2.val);
            l2 = l2.next;
        }   
        l3 = l3.next;    
    }
    
    l3.next = l1 || l2; 
    return link.next;
};
