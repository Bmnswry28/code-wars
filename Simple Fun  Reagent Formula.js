function isValid(formula) {
    const materials = new Set(formula);
  
    // Rule 1: material1 and material2 cannot be selected at the same time
    if (materials.has(1) && materials.has(2)) return false;
  
    // Rule 2: material3 and material4 cannot be selected at the same time
    if (materials.has(3) && materials.has(4)) return false;
  
    // Rule 3: material5 and material6 must be selected at the same time
    if (materials.has(5) !== materials.has(6)) return false;
  
    // Rule 4: material7 or material8 must be selected (at least one, or both)
    if (!materials.has(7) && !materials.has(8)) return false;
  
    // If all rules are satisfied, the formula is valid
    return true;
  }