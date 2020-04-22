<?php

use App\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'permission_create']);
        Permission::create(['name' => 'permission_view']);
        Permission::create(['name' => 'permission_update']);
        Permission::create(['name' => 'permission_delete']);

        Permission::create(['name' => 'role_create']);
        Permission::create(['name' => 'role_view']);
        Permission::create(['name' => 'role_update']);
        Permission::create(['name' => 'role_delete']);
        
        Permission::create(['name' => 'user_create']);
        Permission::create(['name' => 'user_view']);
        Permission::create(['name' => 'user_update']);
        Permission::create(['name' => 'user_delete']);

        $role = Role::create(['name' => 'administrator']);

        $role->givePermissionTo([
            'permission_create',
            'permission_view',
            'permission_update',
            'permission_delete',
            'role_view',
            'role_create',
            'role_update',
            'role_delete',
            'user_create',
            'user_view',
            'user_update',
            'user_delete',
        ]);
        
        $user = User::create([
            'first_name' => 'Admin',
            'last_name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' // password
        ]);

        $user->assignRole('administrator');

    }
}
