#Updating the MDM Agent

##Overview

The MDM Agent may need to be updated when new versions are released. The [AppMgr Feature Type](../guide/csp/app) can be used to upgrade this. 

The AppMgr Feature that should be used for this would be its Upgrade action, instead of using its Uninstall and Install actions. This is because uninstalling the MDM Agent would cause its data to be wiped out. 

By using the Upgrade action, the MDM Agent will not be uninstalled and the existing data will not be wiped out. The MDM Agent that is already installed and the newer version that is being installed must:

* Have the same package name
* Be signed by the same developer
* The newer app must have a higher version number

The [PersistMgr Feature](../guide/csp/persistence) should also be used with the AppMgr Feature to save the XML to the Enterprise Partition. This will cause the XML to survive an Enterprise Reset and automatically reinstall the MDM Agent after an Enterprise Reset. 