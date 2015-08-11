# Repair

Repair broken instances of native JS constructors, making `instanceof` work!
Running code in different VMs will break the instance's reference.
Simply pass an instance or collection of instances to repair and `instanceof`
checks will run again. Although this sounds silly, consider a configuration
with multiple `RegExp` instances or dependencies that assume `instanceof`
checks to work.

### Install

```
npm install --save repair
```

### Example

```
var repair = require('repair')
  , vm = require('vm')
  , config = {};

vm.createContext(config);
vm.runInContext('date=new Date', config);

assert.equal(config.date instanceof Date, true, 'Different instance');
assert.equal(repair(config.date) instanceof Date, true);
```

### License

MIT